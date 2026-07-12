/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-tamale",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 351.0,
      "key": "2-tamale",
      "kind": "unit",
      "label": "2 tamale"
    },
    {
      "gramsPerUnit": 550.0,
      "key": "3-tamale",
      "kind": "unit",
      "label": "3 tamale"
    },
    {
      "gramsPerUnit": 179.0,
      "key": "tamale",
      "kind": "unit",
      "label": "tamale"
    },
    {
      "gramsPerUnit": 302.0,
      "key": "serving-serving-size-varied-from-1-to-3-tamales",
      "kind": "unit",
      "label": "serving serving size varied from 1 to 3 tamales"
    }
  ],
  "name": "Restaurant, Mexican, cheese tamales",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 18.0,
    "energy_kcal": 216.0,
    "fat_g": 12.0,
    "fibre_g": 2.2,
    "folate_ug": 12.0,
    "iron_mg": 0.87,
    "magnesium_mg": 30.0,
    "omega3_g": 0.206,
    "phosphorus_mg": 161.0,
    "potassium_mg": 176.0,
    "protein_g": 8.99,
    "salt_g": 1.2575,
    "sat_fat_g": 3.98,
    "sodium_mg": 503.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169856",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
