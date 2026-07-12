/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup-firmly-packed",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup-firmly-packed",
      "kind": "unit",
      "label": "cup, firmly packed"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, almond paste",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 47.8,
    "energy_kcal": 458.0,
    "fat_g": 27.7,
    "fibre_g": 4.8,
    "folate_ug": 73.0,
    "iron_mg": 1.6,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 258.0,
    "potassium_mg": 314.0,
    "protein_g": 9.0,
    "salt_g": 0.0225,
    "sat_fat_g": 2.63,
    "sodium_mg": 9.0,
    "sugar_g": 36.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 13.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170160",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
