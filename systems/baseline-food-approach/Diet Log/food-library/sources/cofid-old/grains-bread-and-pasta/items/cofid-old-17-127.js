/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "20 samples of Frazzles and Bacon Streaks",
  "id": "cofid-old-17-127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Maize and rice flour snacks",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 62.5,
    "energy_kcal": 450.0,
    "fat_g": 20.9,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 0.6,
    "magnesium_mg": 65.0,
    "omega3_g": 0.84,
    "phosphorus_mg": 120.0,
    "potassium_mg": 140.0,
    "protein_g": 7.0,
    "salt_g": 4.35,
    "sat_fat_g": 6.3,
    "sodium_mg": 1740.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-127",
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
