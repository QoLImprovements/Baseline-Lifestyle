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
  "id": "usda-fndds-2710069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chow mein or chop suey, meatless, with noodles",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 15.7,
    "energy_kcal": 117.0,
    "fat_g": 5.05,
    "fibre_g": 2.1,
    "folate_ug": 55.0,
    "iron_mg": 1.46,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 130.0,
    "protein_g": 2.98,
    "salt_g": 1.085,
    "sat_fat_g": 1.4,
    "sodium_mg": 434.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 16.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710069",
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
