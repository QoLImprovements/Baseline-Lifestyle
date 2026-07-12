/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 897.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "PIZZA HUT 14\" Cheese Pizza, Pan Crust",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 32.8,
    "energy_kcal": 276.0,
    "fat_g": 11.2,
    "fibre_g": 2.1,
    "folate_ug": 106.0,
    "iron_mg": 2.47,
    "magnesium_mg": 21.0,
    "omega3_g": 0.358,
    "phosphorus_mg": 216.0,
    "potassium_mg": 170.0,
    "protein_g": 10.8,
    "salt_g": 1.45,
    "sat_fat_g": 4.39,
    "sodium_mg": 580.0,
    "sugar_g": 2.47,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 17.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173291",
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
