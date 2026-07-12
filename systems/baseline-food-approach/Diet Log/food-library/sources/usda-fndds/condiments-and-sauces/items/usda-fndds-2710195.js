/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710195",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 15.6,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Salad dressing, NFS, for salads",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 5.9,
    "energy_kcal": 430.0,
    "fat_g": 44.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.3,
    "magnesium_mg": 5.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 186.0,
    "potassium_mg": 64.0,
    "protein_g": 1.32,
    "salt_g": 2.025,
    "sat_fat_g": 6.96,
    "sodium_mg": 810.0,
    "sugar_g": 4.69,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.22,
    "vitamin_k_ug": 134.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710195",
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
