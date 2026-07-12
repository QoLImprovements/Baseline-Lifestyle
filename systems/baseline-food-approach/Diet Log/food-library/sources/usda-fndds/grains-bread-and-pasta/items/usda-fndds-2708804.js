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
  "id": "usda-fndds-2708804",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pad Thai, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 14.4,
    "energy_kcal": 154.0,
    "fat_g": 7.5,
    "fibre_g": 1.2,
    "folate_ug": 24.0,
    "iron_mg": 0.68,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 152.0,
    "protein_g": 8.13,
    "salt_g": 0.96,
    "sat_fat_g": 1.3,
    "sodium_mg": 384.0,
    "sugar_g": 4.06,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 19.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708804",
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
