/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Cheese, cheddar, reduced fat (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 761.0,
    "carbs_g": 2.67,
    "energy_kcal": 1320.0,
    "fat_g": 20.4,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.12,
    "magnesium_mg": 27.0,
    "omega3_g": 0.077,
    "phosphorus_mg": 520.0,
    "potassium_mg": 63.0,
    "protein_g": 27.4,
    "salt_g": 1.57,
    "sat_fat_g": 12.6,
    "sodium_mg": 628.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 145.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171292",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
