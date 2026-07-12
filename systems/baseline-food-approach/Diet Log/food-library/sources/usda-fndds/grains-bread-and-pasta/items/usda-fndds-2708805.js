/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pad Thai, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 16.3,
    "energy_kcal": 165.0,
    "fat_g": 9.2,
    "fibre_g": 1.8,
    "folate_ug": 27.0,
    "iron_mg": 1.17,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 126.0,
    "protein_g": 5.79,
    "salt_g": 0.86,
    "sat_fat_g": 1.44,
    "sodium_mg": 344.0,
    "sugar_g": 4.65,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708805",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried-rice-and-lo-chow-mein",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
