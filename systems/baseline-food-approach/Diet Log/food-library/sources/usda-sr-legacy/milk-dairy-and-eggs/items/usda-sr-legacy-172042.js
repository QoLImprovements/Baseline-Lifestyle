/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172042",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 573.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "PIZZA HUT 12\" Cheese Pizza, THIN 'N CRISPY Crust",
  "nutritionPerBasis": {
    "calcium_mg": 278.0,
    "carbs_g": 28.6,
    "energy_kcal": 303.0,
    "fat_g": 14.1,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 1.71,
    "magnesium_mg": 24.0,
    "omega3_g": 0.177,
    "phosphorus_mg": 317.0,
    "potassium_mg": 191.0,
    "protein_g": 15.3,
    "salt_g": 1.96,
    "sat_fat_g": 6.9,
    "sodium_mg": 784.0,
    "sugar_g": 2.67,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172042",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
