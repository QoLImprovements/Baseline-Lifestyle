/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, Cinnamon-Spice, dry",
  "nutritionPerBasis": {
    "calcium_mg": 229.0,
    "carbs_g": 74.5,
    "energy_kcal": 1540.0,
    "fat_g": 5.1,
    "fibre_g": 8.2,
    "folate_ug": 191.0,
    "iron_mg": 8.31,
    "magnesium_mg": 99.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 353.0,
    "potassium_mg": 303.0,
    "protein_g": 10.4,
    "salt_g": 1.04,
    "sat_fat_g": 0.808,
    "sodium_mg": 416.0,
    "sugar_g": 21.1,
    "vitamin_a_ug": 440.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174636",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
