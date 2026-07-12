/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710200",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.6,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Coleslaw dressing",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 22.4,
    "energy_kcal": 404.0,
    "fat_g": 34.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.33,
    "magnesium_mg": 3.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 42.0,
    "potassium_mg": 35.0,
    "protein_g": 0.85,
    "salt_g": 2.125,
    "sat_fat_g": 5.34,
    "sodium_mg": 850.0,
    "sugar_g": 21.2,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 3.08,
    "vitamin_k_ug": 66.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710200",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "condiments-and-sauces",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
