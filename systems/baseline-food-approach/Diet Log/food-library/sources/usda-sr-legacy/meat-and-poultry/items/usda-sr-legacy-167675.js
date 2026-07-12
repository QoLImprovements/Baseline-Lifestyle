/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "order",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167675",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 535.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    }
  ],
  "name": "Restaurant, Chinese, general tso's chicken",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 24.0,
    "energy_kcal": 1230.0,
    "fat_g": 16.4,
    "fibre_g": 0.9,
    "folate_ug": 11.0,
    "iron_mg": 1.16,
    "magnesium_mg": 18.0,
    "omega3_g": 0.856,
    "phosphorus_mg": 127.0,
    "potassium_mg": 201.0,
    "protein_g": 12.9,
    "salt_g": 1.0875,
    "sat_fat_g": 2.76,
    "sodium_mg": 435.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 38.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167675",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
