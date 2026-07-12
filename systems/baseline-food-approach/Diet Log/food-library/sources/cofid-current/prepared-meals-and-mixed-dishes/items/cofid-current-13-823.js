/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Homemade, literature sources",
  "id": "cofid-current-13-823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry powder, mixed flavours",
  "nutritionPerBasis": {
    "calcium_mg": 460.0,
    "carbs_g": 34.7,
    "energy_kcal": 316.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 32.3,
    "magnesium_mg": 240.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 330.0,
    "potassium_mg": 1880.0,
    "protein_g": 13.0,
    "salt_g": 1.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2400.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-823",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
