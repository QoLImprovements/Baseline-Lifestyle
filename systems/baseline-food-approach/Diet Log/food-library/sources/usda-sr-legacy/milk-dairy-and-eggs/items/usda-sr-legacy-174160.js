/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Beverages",
  "id": "usda-sr-legacy-174160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Beverages, chocolate-flavor beverage mix for milk, powder, with added nutrients, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 11.9,
    "energy_kcal": 373.0,
    "fat_g": 3.17,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.03,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 144.0,
    "protein_g": 3.27,
    "salt_g": 0.125,
    "sat_fat_g": 1.9,
    "sodium_mg": 50.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174160",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
