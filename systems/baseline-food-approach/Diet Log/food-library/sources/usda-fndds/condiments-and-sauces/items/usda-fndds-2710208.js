/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710208",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.3,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Avocado dressing",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 7.36,
    "energy_kcal": 427.0,
    "fat_g": 43.3,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.35,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 58.0,
    "protein_g": 1.9,
    "salt_g": 2.1675,
    "sat_fat_g": 5.98,
    "sodium_mg": 867.0,
    "sugar_g": 6.67,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 4.6,
    "vitamin_k_ug": 96.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710208",
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
