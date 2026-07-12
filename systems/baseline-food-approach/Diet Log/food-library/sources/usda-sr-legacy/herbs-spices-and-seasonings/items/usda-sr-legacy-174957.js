/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "cup-crushed",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "large-rectangular-piece-or-2-squares-or-4-small-rectangular",
      "kind": "unit",
      "label": "large rectangular piece or 2 squares or 4 small rectangular pieces"
    }
  ],
  "name": "Cookies, graham crackers, plain or honey (includes cinnamon)",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 77.7,
    "energy_kcal": 430.0,
    "fat_g": 10.6,
    "fibre_g": 3.4,
    "folate_ug": 91.0,
    "iron_mg": 3.78,
    "magnesium_mg": 40.0,
    "omega3_g": 0.599,
    "phosphorus_mg": 185.0,
    "potassium_mg": 170.0,
    "protein_g": 6.69,
    "salt_g": 1.29,
    "sat_fat_g": 1.63,
    "sodium_mg": 516.0,
    "sugar_g": 24.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.51,
    "vitamin_k_ug": 14.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174957",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
