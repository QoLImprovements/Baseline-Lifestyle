/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "packet",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174661",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, fruit and cream, variety of flavors, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 246.0,
    "carbs_g": 71.6,
    "energy_kcal": 1570.0,
    "fat_g": 7.46,
    "fibre_g": 8.3,
    "folate_ug": 170.0,
    "iron_mg": 12.1,
    "magnesium_mg": 103.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 359.0,
    "potassium_mg": 339.0,
    "protein_g": 10.2,
    "salt_g": 1.3975,
    "sat_fat_g": 2.09,
    "sodium_mg": 559.0,
    "sugar_g": 17.7,
    "vitamin_a_ug": 1670.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174661",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
