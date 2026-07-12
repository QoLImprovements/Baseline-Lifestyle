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
  "id": "usda-sr-legacy-172040",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 738.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "PIZZA HUT 12\" Cheese Pizza, Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 209.0,
    "carbs_g": 31.2,
    "energy_kcal": 1130.0,
    "fat_g": 10.9,
    "fibre_g": 1.8,
    "folate_ug": 0.0,
    "iron_mg": 1.95,
    "magnesium_mg": 22.0,
    "omega3_g": 0.196,
    "phosphorus_mg": 249.0,
    "potassium_mg": 173.0,
    "protein_g": 11.9,
    "salt_g": 1.7125,
    "sat_fat_g": 5.04,
    "sodium_mg": 685.0,
    "sugar_g": 3.37,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172040",
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
