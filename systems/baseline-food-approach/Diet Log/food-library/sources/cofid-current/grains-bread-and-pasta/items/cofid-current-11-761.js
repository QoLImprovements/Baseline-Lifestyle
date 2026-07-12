/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 5 products, including Shreddies and own brand",
  "id": "cofid-current-11-761",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, malted wheat, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 75.7,
    "energy_kcal": 339.0,
    "fat_g": 2.3,
    "fibre_g": 8.6,
    "folate_ug": 150.0,
    "iron_mg": 10.6,
    "magnesium_mg": 70.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 229.0,
    "potassium_mg": 348.0,
    "protein_g": 8.7,
    "salt_g": 0.625,
    "sat_fat_g": 0.32,
    "sodium_mg": 250.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-761",
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
