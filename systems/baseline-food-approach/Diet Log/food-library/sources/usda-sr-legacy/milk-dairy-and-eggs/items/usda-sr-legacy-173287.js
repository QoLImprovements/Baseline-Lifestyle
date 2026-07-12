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
  "id": "usda-sr-legacy-173287",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 678.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    }
  ],
  "name": "PAPA JOHN'S 14\" Cheese Pizza, Thin Crust",
  "nutritionPerBasis": {
    "calcium_mg": 238.0,
    "carbs_g": 26.3,
    "energy_kcal": 295.0,
    "fat_g": 15.7,
    "fibre_g": 2.3,
    "folate_ug": 0.0,
    "iron_mg": 0.51,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 160.0,
    "protein_g": 12.3,
    "salt_g": 1.32,
    "sat_fat_g": 6.2,
    "sodium_mg": 528.0,
    "sugar_g": 3.85,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173287",
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
