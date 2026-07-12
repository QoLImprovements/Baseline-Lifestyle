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
  "id": "usda-sr-legacy-173294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 590.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, cheese topping, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 288.0,
    "carbs_g": 31.2,
    "energy_kcal": 302.0,
    "fat_g": 14.0,
    "fibre_g": 2.5,
    "folate_ug": 96.0,
    "iron_mg": 1.71,
    "magnesium_mg": 24.0,
    "omega3_g": 0.36,
    "phosphorus_mg": 295.0,
    "potassium_mg": 199.0,
    "protein_g": 12.8,
    "salt_g": 1.855,
    "sat_fat_g": 6.22,
    "sodium_mg": 742.0,
    "sugar_g": 3.61,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173294",
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
