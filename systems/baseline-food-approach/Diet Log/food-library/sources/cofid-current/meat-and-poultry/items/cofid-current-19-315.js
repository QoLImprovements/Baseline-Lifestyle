/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Includes chicken burger, bun, lettuce and mayonnaise",
  "id": "cofid-current-19-315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, chicken, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 23.4,
    "energy_kcal": 235.0,
    "fat_g": 10.8,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 190.0,
    "protein_g": 12.5,
    "salt_g": 1.4,
    "sat_fat_g": 0.0,
    "sodium_mg": 560.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-315",
  "state": "Unspecified",
  "subcategory": "MBG",
  "tags": [
    "mbg",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
