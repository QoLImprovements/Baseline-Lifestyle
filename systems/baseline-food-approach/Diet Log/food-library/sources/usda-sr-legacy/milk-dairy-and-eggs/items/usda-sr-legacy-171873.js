/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-171873",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Beverages, chocolate drink, milk and soy based, ready to drink, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 17.3,
    "energy_kcal": 101.0,
    "fat_g": 1.69,
    "fibre_g": 1.3,
    "folate_ug": 42.0,
    "iron_mg": 1.9,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 245.0,
    "protein_g": 4.22,
    "salt_g": 0.1575,
    "sat_fat_g": 0.422,
    "sodium_mg": 63.0,
    "sugar_g": 8.44,
    "vitamin_a_ug": 158.0,
    "vitamin_c_mg": 25.3,
    "vitamin_e_mg": 5.7,
    "vitamin_k_ug": 16.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171873",
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
