/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1032.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "DOMINO'S 14\" Sausage Pizza, Ultimate Deep Dish Crust",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 31.2,
    "energy_kcal": 1160.0,
    "fat_g": 12.0,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 2.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.262,
    "phosphorus_mg": 207.0,
    "potassium_mg": 188.0,
    "protein_g": 11.0,
    "salt_g": 1.6925,
    "sat_fat_g": 4.76,
    "sodium_mg": 677.0,
    "sugar_g": 3.82,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170767",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
