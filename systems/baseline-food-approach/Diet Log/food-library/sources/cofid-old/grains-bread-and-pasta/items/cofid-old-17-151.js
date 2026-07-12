/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "20 samples, 3 brands; assorted flavours",
  "id": "cofid-old-17-151",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Wheat crunchies",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 59.4,
    "energy_kcal": 450.0,
    "fat_g": 20.7,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 2.2,
    "magnesium_mg": 53.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 220.0,
    "potassium_mg": 260.0,
    "protein_g": 10.3,
    "salt_g": 2.95,
    "sat_fat_g": 9.1,
    "sodium_mg": 1180.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-151",
  "state": "Unspecified",
  "subcategory": "SNC",
  "tags": [
    "grains-bread-and-pasta",
    "snc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
