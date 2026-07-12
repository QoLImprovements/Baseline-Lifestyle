/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-dry-mix",
  "description": "Beverages",
  "id": "usda-sr-legacy-171874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "cup-dry-mix",
      "kind": "unit",
      "label": "cup dry mix"
    },
    {
      "gramsPerUnit": 251.0,
      "key": "cup-prepared",
      "kind": "unit",
      "label": "cup prepared"
    }
  ],
  "name": "Beverages, chocolate malt powder, prepared with 1% milk, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 8.81,
    "energy_kcal": 239.0,
    "fat_g": 0.97,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.14,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 191.0,
    "protein_g": 3.32,
    "salt_g": 0.15,
    "sat_fat_g": 0.63,
    "sodium_mg": 60.0,
    "sugar_g": 7.81,
    "vitamin_a_ug": 171.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 13.8,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171874",
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
