/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chow fun noodles with vegetables, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 14.5,
    "energy_kcal": 74.0,
    "fat_g": 0.97,
    "fibre_g": 1.1,
    "folate_ug": 21.0,
    "iron_mg": 0.29,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 73.0,
    "protein_g": 1.56,
    "salt_g": 0.4725,
    "sat_fat_g": 0.164,
    "sodium_mg": 189.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 9.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708797",
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
