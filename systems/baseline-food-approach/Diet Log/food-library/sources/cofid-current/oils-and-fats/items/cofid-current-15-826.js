/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Aubergine fried in chick pea flour batter",
  "id": "cofid-current-15-826",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, aubergine, fried in vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 17.2,
    "energy_kcal": 294.0,
    "fat_g": 22.5,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 1.13,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 247.0,
    "protein_g": 7.9,
    "salt_g": 0.045,
    "sat_fat_g": 1.63,
    "sodium_mg": 18.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 5.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-826",
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
