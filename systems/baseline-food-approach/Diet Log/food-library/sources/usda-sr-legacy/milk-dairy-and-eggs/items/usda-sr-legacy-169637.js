/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Candies, milk chocolate coated coffee beans",
  "nutritionPerBasis": {
    "calcium_mg": 169.0,
    "carbs_g": 55.2,
    "energy_kcal": 549.0,
    "fat_g": 33.2,
    "fibre_g": 5.7,
    "folate_ug": 10.0,
    "iron_mg": 2.29,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 413.0,
    "protein_g": 7.41,
    "salt_g": 0.175,
    "sat_fat_g": 18.1,
    "sodium_mg": 70.0,
    "sugar_g": 50.8,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169637",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
