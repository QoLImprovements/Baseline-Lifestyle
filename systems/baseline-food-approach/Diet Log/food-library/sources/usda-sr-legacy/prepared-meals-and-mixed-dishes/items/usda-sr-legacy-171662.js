/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup-cooked",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "cup-cooked",
      "kind": "unit",
      "label": "cup, cooked"
    },
    {
      "gramsPerUnit": 501.0,
      "key": "cup-dry-yields",
      "kind": "unit",
      "label": "cup, dry, yields"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "packet-dry-yields",
      "kind": "unit",
      "label": "packet, dry, yields"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "oz-dry-yields",
      "kind": "unit",
      "label": "oz, dry, yields"
    }
  ],
  "name": "Cereals, oats, instant, fortified, plain, prepared with water (boiling water added or microwaved)",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 11.7,
    "energy_kcal": 68.0,
    "fat_g": 1.36,
    "fibre_g": 1.7,
    "folate_ug": 44.0,
    "iron_mg": 5.96,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 61.0,
    "protein_g": 2.37,
    "salt_g": 0.1225,
    "sat_fat_g": 0.226,
    "sodium_mg": 49.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171662",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
