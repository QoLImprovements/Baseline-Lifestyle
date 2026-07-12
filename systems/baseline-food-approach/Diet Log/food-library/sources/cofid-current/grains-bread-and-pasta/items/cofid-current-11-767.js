/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "15 samples, 9 products, including All-Bran and own brand",
  "id": "cofid-current-11-767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, bran type cereal, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 329.0,
    "carbs_g": 49.7,
    "energy_kcal": 267.0,
    "fat_g": 3.4,
    "fibre_g": 24.6,
    "folate_ug": 200.0,
    "iron_mg": 10.7,
    "magnesium_mg": 189.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 639.0,
    "potassium_mg": 757.0,
    "protein_g": 12.4,
    "salt_g": 0.9,
    "sat_fat_g": 0.53,
    "sodium_mg": 360.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-767",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
