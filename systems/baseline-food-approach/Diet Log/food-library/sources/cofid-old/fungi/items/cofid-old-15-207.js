/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Mushroom, onion, tomato and spices. Recipe from manufacturer",
  "id": "cofid-old-15-207",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushroom Dopiaza, retail",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 3.7,
    "energy_kcal": 69.0,
    "fat_g": 5.7,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.7,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 240.0,
    "protein_g": 1.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.4,
    "sodium_mg": 0.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-207",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fungi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
