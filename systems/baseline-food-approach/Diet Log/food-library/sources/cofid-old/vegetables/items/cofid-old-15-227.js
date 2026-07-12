/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "14 samples purchased from take-away outlets",
  "id": "cofid-old-15-227",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, onion, retail, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 22.4,
    "energy_kcal": 311.0,
    "fat_g": 21.4,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 3.2,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 550.0,
    "protein_g": 8.6,
    "salt_g": 0.9,
    "sat_fat_g": 1.9,
    "sodium_mg": 360.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-227",
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
