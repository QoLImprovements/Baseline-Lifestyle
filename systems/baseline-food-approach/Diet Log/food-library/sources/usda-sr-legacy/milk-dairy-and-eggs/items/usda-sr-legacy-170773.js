/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-1-8-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "slice-1-8-pizza",
      "kind": "unit",
      "label": "slice 1/8 pizza"
    },
    {
      "gramsPerUnit": 937.0,
      "key": "pizza-whole",
      "kind": "unit",
      "label": "pizza whole"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, cheese topping, stuffed crust",
  "nutritionPerBasis": {
    "calcium_mg": 238.0,
    "carbs_g": 30.0,
    "energy_kcal": 1140.0,
    "fat_g": 11.6,
    "fibre_g": 1.7,
    "folate_ug": 90.0,
    "iron_mg": 2.04,
    "magnesium_mg": 22.0,
    "omega3_g": 0.159,
    "phosphorus_mg": 249.0,
    "potassium_mg": 229.0,
    "protein_g": 12.2,
    "salt_g": 1.5375,
    "sat_fat_g": 5.82,
    "sodium_mg": 615.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170773",
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
