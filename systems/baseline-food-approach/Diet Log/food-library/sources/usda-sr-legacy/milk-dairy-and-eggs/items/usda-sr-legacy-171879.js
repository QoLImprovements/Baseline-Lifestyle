/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-171879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, chocolate-flavor beverage mix, powder, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 12.0,
    "energy_kcal": 356.0,
    "fat_g": 3.24,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.3,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 172.0,
    "protein_g": 3.23,
    "salt_g": 0.145,
    "sat_fat_g": 1.86,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171879",
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
