/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "4 samples, includes potato, carrots and swedes",
  "id": "cofid-current-15-621",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetables, mixed, cooked with onion, spice and tomatoes, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 6.6,
    "energy_kcal": 82.0,
    "fat_g": 5.3,
    "fibre_g": 3.3,
    "folate_ug": 6.0,
    "iron_mg": 0.94,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 377.0,
    "protein_g": 2.4,
    "salt_g": 0.935,
    "sat_fat_g": 0.73,
    "sodium_mg": 374.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 132.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-621",
  "state": "Cooked",
  "subcategory": "DR",
  "tags": [
    "cooked",
    "dr",
    "herbs-spices-and-seasonings"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
