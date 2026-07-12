/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 packets, 4 brands",
  "id": "cofid-current-17-850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, chicken noodle, dried",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 56.0,
    "energy_kcal": 322.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.7,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 250.0,
    "protein_g": 17.1,
    "salt_g": 9.35,
    "sat_fat_g": 0.0,
    "sodium_mg": 3740.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-850",
  "state": "Dried",
  "subcategory": "WAE",
  "tags": [
    "dried",
    "meat-and-poultry",
    "wae"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
