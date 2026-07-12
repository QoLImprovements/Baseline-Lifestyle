/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 15-332 made up with water and egg according to packet directions",
  "id": "cofid-old-15-337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegeburger mix, made up with water and egg",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 12.1,
    "energy_kcal": 148.0,
    "fat_g": 6.0,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 3.4,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 380.0,
    "protein_g": 12.5,
    "salt_g": 0.975,
    "sat_fat_g": 2.0,
    "sodium_mg": 390.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-337",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
