/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 9.8,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "3-slices-1-serving",
      "kind": "unit",
      "label": "3 slices 1 serving"
    }
  ],
  "name": "Salami, dry or hard, pork, beef",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.72,
    "energy_kcal": 378.0,
    "fat_g": 31.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.36,
    "magnesium_mg": 20.0,
    "omega3_g": 0.21,
    "phosphorus_mg": 192.0,
    "potassium_mg": 363.0,
    "protein_g": 21.1,
    "salt_g": 4.4,
    "sat_fat_g": 11.4,
    "sodium_mg": 1760.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174582",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
