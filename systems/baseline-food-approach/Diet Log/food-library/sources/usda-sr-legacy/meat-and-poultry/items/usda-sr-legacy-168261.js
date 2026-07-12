/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.0,
    "energy_kcal": 233.0,
    "fat_g": 13.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.85,
    "magnesium_mg": 24.0,
    "omega3_g": 0.048,
    "phosphorus_mg": 217.0,
    "potassium_mg": 318.0,
    "protein_g": 26.6,
    "salt_g": 0.15,
    "sat_fat_g": 5.02,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168261",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
