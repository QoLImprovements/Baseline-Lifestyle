/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands; soya and wheat protein based. Fried 4-5 minutes",
  "id": "cofid-old-15-330",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegeburger, retail, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 7.5,
    "energy_kcal": 245.0,
    "fat_g": 17.0,
    "fibre_g": 0.0,
    "folate_ug": 82.0,
    "iron_mg": 3.9,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 530.0,
    "protein_g": 15.9,
    "salt_g": 1.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 420.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-330",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
