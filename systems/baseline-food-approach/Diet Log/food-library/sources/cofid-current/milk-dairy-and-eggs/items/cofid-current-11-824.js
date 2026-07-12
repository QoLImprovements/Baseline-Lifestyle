/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including cheese straws, twists and crispies",
  "id": "cofid-current-11-824",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese straws/twists, retail",
  "nutritionPerBasis": {
    "calcium_mg": 233.0,
    "carbs_g": 48.3,
    "energy_kcal": 510.0,
    "fat_g": 30.3,
    "fibre_g": 2.5,
    "folate_ug": 35.0,
    "iron_mg": 1.15,
    "magnesium_mg": 24.0,
    "omega3_g": 0.31,
    "phosphorus_mg": 215.0,
    "potassium_mg": 153.0,
    "protein_g": 14.1,
    "salt_g": 2.435,
    "sat_fat_g": 17.54,
    "sodium_mg": 974.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 184.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-824",
  "state": "Raw",
  "subcategory": "AM",
  "tags": [
    "am",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
