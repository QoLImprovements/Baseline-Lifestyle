/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "12-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170310",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 401.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    },
    {
      "gramsPerUnit": 201.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    }
  ],
  "name": "SUBWAY, steak & cheese sub on white bread with American cheese, lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 183.0,
    "carbs_g": 21.5,
    "energy_kcal": 766.0,
    "fat_g": 5.34,
    "fibre_g": 1.2,
    "folate_ug": 63.0,
    "iron_mg": 2.02,
    "magnesium_mg": 22.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 132.0,
    "potassium_mg": 183.0,
    "protein_g": 12.3,
    "salt_g": 1.11,
    "sat_fat_g": 2.03,
    "sodium_mg": 444.0,
    "sugar_g": 3.41,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170310",
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
