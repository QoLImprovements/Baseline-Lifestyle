/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, assorted meat and vegetable varieties",
  "id": "cofid-current-11-880",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, savoury, including chicken, beef, mushroom and vegetable varieties, dried, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 83.3,
    "energy_kcal": 369.0,
    "fat_g": 2.7,
    "fibre_g": 3.6,
    "folate_ug": 48.0,
    "iron_mg": 1.01,
    "magnesium_mg": 42.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 216.0,
    "potassium_mg": 373.0,
    "protein_g": 8.0,
    "salt_g": 3.0775,
    "sat_fat_g": 0.91,
    "sodium_mg": 1231.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-880",
  "state": "Dried",
  "subcategory": "AC",
  "tags": [
    "ac",
    "dried",
    "fungi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
