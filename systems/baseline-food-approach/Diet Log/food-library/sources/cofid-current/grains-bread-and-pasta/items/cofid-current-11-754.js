/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 1 product",
  "id": "cofid-current-11-754",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, Ricicles, Kellogg's",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 95.4,
    "energy_kcal": 377.0,
    "fat_g": 0.4,
    "fibre_g": 0.3,
    "folate_ug": 177.0,
    "iron_mg": 7.9,
    "magnesium_mg": 0.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.8,
    "salt_g": 1.15,
    "sat_fat_g": 0.09,
    "sodium_mg": 460.0,
    "sugar_g": 39.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-754",
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
