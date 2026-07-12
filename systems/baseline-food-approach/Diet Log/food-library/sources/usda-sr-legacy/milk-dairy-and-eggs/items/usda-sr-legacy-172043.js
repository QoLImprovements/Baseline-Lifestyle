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
  "id": "usda-sr-legacy-172043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 540.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "DOMINO'S 14\" Cheese Pizza, Crunchy Thin Crust",
  "nutritionPerBasis": {
    "calcium_mg": 292.0,
    "carbs_g": 28.2,
    "energy_kcal": 298.0,
    "fat_g": 15.1,
    "fibre_g": 2.5,
    "folate_ug": 0.0,
    "iron_mg": 0.91,
    "magnesium_mg": 24.0,
    "omega3_g": 0.465,
    "phosphorus_mg": 292.0,
    "potassium_mg": 202.0,
    "protein_g": 12.3,
    "salt_g": 1.57,
    "sat_fat_g": 6.34,
    "sodium_mg": 628.0,
    "sugar_g": 4.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 15.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172043",
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
