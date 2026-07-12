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
  "id": "usda-sr-legacy-172041",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 728.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "PIZZA HUT 12\" Cheese Pizza, Pan Crust",
  "nutritionPerBasis": {
    "calcium_mg": 208.0,
    "carbs_g": 29.9,
    "energy_kcal": 280.0,
    "fat_g": 12.6,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 1.86,
    "magnesium_mg": 21.0,
    "omega3_g": 0.304,
    "phosphorus_mg": 241.0,
    "potassium_mg": 168.0,
    "protein_g": 11.7,
    "salt_g": 1.56,
    "sat_fat_g": 5.18,
    "sodium_mg": 624.0,
    "sugar_g": 3.21,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172041",
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
