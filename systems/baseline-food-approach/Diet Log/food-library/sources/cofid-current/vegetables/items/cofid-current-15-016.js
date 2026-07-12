/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Cabbage, spinach, onion and chick pea flour. Recipe from manufacturer",
  "id": "cofid-current-15-016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cabbage and spinach",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 7.8,
    "energy_kcal": 198.0,
    "fat_g": 17.1,
    "fibre_g": 0.0,
    "folate_ug": 54.0,
    "iron_mg": 1.8,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 440.0,
    "protein_g": 3.6,
    "salt_g": 1.2,
    "sat_fat_g": 1.8,
    "sodium_mg": 480.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 4.88,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-016",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
