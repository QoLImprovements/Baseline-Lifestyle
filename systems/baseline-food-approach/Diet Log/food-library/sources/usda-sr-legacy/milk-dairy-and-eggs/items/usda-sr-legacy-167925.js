/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "6-cracker-1-cracker-6-5g",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167925",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "6-cracker-1-cracker-6-5g",
      "kind": "unit",
      "label": "6 cracker 1 cracker = 6.5g"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Crackers, cheese, sandwich-type with cheese filling",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 58.8,
    "energy_kcal": 2050.0,
    "fat_g": 24.4,
    "fibre_g": 1.9,
    "folate_ug": 82.0,
    "iron_mg": 2.13,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 288.0,
    "potassium_mg": 295.0,
    "protein_g": 8.92,
    "salt_g": 2.195,
    "sat_fat_g": 4.81,
    "sodium_mg": 878.0,
    "sugar_g": 12.3,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 20.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167925",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
