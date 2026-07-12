/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "18 samples, 12 shops. Vegetable and beansprout filling",
  "id": "cofid-old-50-561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancake roll",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 20.9,
    "energy_kcal": 217.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.1,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 6.6,
    "salt_g": 1.525,
    "sat_fat_g": 3.7,
    "sodium_mg": 610.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "50-561",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "grains-bread-and-pasta",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
