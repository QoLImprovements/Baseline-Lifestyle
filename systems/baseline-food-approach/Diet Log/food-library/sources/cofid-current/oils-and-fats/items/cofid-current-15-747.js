/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Large white chick peas, tomato and onion.",
  "id": "cofid-current-15-747",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chick pea, whole and tomato, Gujerati, with vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 20.1,
    "energy_kcal": 238.0,
    "fat_g": 14.7,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 2.27,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 465.0,
    "protein_g": 7.7,
    "salt_g": 0.0375,
    "sat_fat_g": 1.03,
    "sodium_mg": 15.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 4.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-747",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
