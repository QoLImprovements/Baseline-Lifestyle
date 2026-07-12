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
  "id": "usda-sr-legacy-169180",
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
    }
  ],
  "name": "Pork, fresh, loin, tenderloin, separable lean only, with added solution, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.31,
    "energy_kcal": 486.0,
    "fat_g": 3.15,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.98,
    "magnesium_mg": 25.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 316.0,
    "potassium_mg": 567.0,
    "protein_g": 21.6,
    "salt_g": 0.5775,
    "sat_fat_g": 1.08,
    "sodium_mg": 231.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169180",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
