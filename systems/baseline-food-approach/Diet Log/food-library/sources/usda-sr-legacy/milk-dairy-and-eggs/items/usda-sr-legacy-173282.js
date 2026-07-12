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
  "id": "usda-sr-legacy-173282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 865.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "DOMINO'S 14\" Cheese Pizza, Classic Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 167.0,
    "carbs_g": 33.2,
    "energy_kcal": 1080.0,
    "fat_g": 8.97,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 2.34,
    "magnesium_mg": 24.0,
    "omega3_g": 0.193,
    "phosphorus_mg": 204.0,
    "potassium_mg": 161.0,
    "protein_g": 10.8,
    "salt_g": 1.3075,
    "sat_fat_g": 4.11,
    "sodium_mg": 523.0,
    "sugar_g": 4.02,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173282",
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
